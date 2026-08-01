import os
import re
import json
import urllib.request
import urllib.parse
import ssl
import sys

ctx = ssl._create_unverified_context()

def translate_block(text, src="en", dest="id"):
    if not text or not text.strip():
        return text
    
    # Don't translate code blocks or plain URLs
    if text.strip().startswith("```") or text.strip().startswith("http"):
        return text

    # Protect code formatting inside backticks `code`
    inline_codes = []
    def save_inline_code(match):
        inline_codes.append(match.group(0))
        return f"__INLINECODE_{len(inline_codes)-1}__"
    
    masked_text = re.sub(r'`[^`]+`', save_inline_code, text)

    # Protect markdown links [text](url)
    links = []
    def save_link(match):
        links.append((match.group(1), match.group(2)))
        return f"__LINK_{len(links)-1}__"

    masked_text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', save_link, masked_text)

    # Request translation
    url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + src + "&tl=" + dest + "&dt=t&q=" + urllib.parse.quote(masked_text)
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})

    try:
        with urllib.request.urlopen(req, context=ctx, timeout=10) as response:
            res = json.loads(response.read().decode("utf-8"))
            translated_result = "".join([sentence[0] for sentence in res[0] if sentence and len(sentence) > 0 and sentence[0]])

            # Restore links
            for idx, (link_text, link_url) in enumerate(links):
                translated_result = translated_result.replace(f"__LINK_{idx}__", f"[{link_text}]({link_url})")

            # Restore inline codes
            for idx, code_str in enumerate(inline_codes):
                translated_result = translated_result.replace(f"__INLINECODE_{idx}__", code_str)

            return translated_result
    except Exception as e:
        sys.stderr.write(f"Translation error: {e}\n")
        return text

def translate_file(file_path):
    sys.stdout.write(f"Translating {os.path.basename(file_path)}...\n")
    sys.stdout.flush()

    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Split by double newlines into blocks to preserve paragraph structure
    blocks = content.split("\n\n")
    translated_blocks = []

    for block in blocks:
        if block.strip().startswith("```"):
            translated_blocks.append(block)
        elif block.strip().startswith("<"):
            # HTML element block - translate text content inside if text
            translated_blocks.append(translate_block(block))
        else:
            translated_blocks.append(translate_block(block))

    new_content = "\n\n".join(translated_blocks)
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else "tracks"
    
    if os.path.isfile(target):
        translate_file(target)
    else:
        for root, dirs, files in os.walk(target):
            for file in files:
                if file.endswith(".md") and not file.endsWith(".id.md") if hasattr(file, "endsWith") else file.endswith(".md"):
                    translate_file(os.path.join(root, file))
