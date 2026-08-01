import os
import re
import json
import urllib.request
import urllib.parse
import ssl
import time

ctx = ssl._create_unverified_context()

def translate_text(text):
    if not text or not text.strip():
        return text
    
    # Don't translate code blocks or URLs alone
    if text.strip().startswith("```") or text.strip().startswith("http") or text.strip().startswith("file://"):
        return text

    # Preserve markdown links [text](url) -> [translated_text](url)
    link_pattern = re.compile(r'\[([^\]]+)\]\(([^)]+)\)')
    links = []
    def save_link(match):
        links.append((match.group(1), match.group(2)))
        return f"__LINK_{len(links)-1}__"
    
    masked_text = link_pattern.sub(save_link, text)

    # Call translation API
    url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=id&dt=t&q=" + urllib.parse.quote(masked_text)
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    
    try:
        with urllib.request.urlopen(req, context=ctx, timeout=10) as response:
            res = json.loads(response.read().decode("utf-8"))
            translated_result = "".join([sentence[0] for sentence in res[0] if sentence and len(sentence) > 0 and sentence[0]])
            
            # Restore links
            for idx, (link_text, link_url) in enumerate(links):
                # Translate link text if appropriate
                translated_link_text = translate_text(link_text) if len(link_text.split()) < 10 else link_text
                translated_result = translated_result.replace(f"__LINK_{idx}__", f"[{translated_link_text}]({link_url})")
            
            return translated_result
    except Exception as e:
        print(f"Translation warning for '{text[:30]}...': {e}")
        return text

def translate_markdown_file(file_path):
    print(f"Translating: {file_path}")
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    in_code_block = False

    for line in lines:
        stripped = line.strip()
        
        # Toggle code block
        if stripped.startswith("```"):
            in_code_block = not in_code_block
            new_lines.append(line)
            continue
            
        if in_code_block or not stripped:
            new_lines.append(line)
            continue

        # Handle headings
        if stripped.startswith("#"):
            match = re.match(r'^(#+\s*)(.+)$', stripped)
            if match:
                hashes, heading_text = match.groups()
                translated_heading = translate_text(heading_text)
                new_lines.append(f"{hashes}{translated_heading}\n")
                continue

        # Handle list items
        if re.match(r'^(\*|-|\d+\.)\s+', stripped):
            match = re.match(r'^(\*|-|\d+\.)\s+(.+)$', stripped)
            if match:
                prefix, item_text = match.groups()
                translated_item = translate_text(item_text)
                new_lines.append(f"{prefix} {translated_item}\n")
                continue

        # Handle blockquotes
        if stripped.startswith(">"):
            match = re.match(r'^(>\s*)(.+)$', stripped)
            if match:
                prefix, quote_text = match.groups()
                translated_quote = translate_text(quote_text)
                new_lines.append(f"{prefix}{translated_quote}\n")
                continue

        # Handle normal paragraphs
        translated_line = translate_text(stripped)
        new_lines.append(f"{translated_line}\n")

    with open(file_path, "w", encoding="utf-8") as f:
        f.writelines(new_lines)

# Run full translation across all markdown files
project_root = os.getcwd()
tracks_dir = os.path.join(project_root, "tracks")

count = 0
for root, dirs, files in os.walk(tracks_dir):
    for file in files:
        if file.endswith(".md"):
            fp = os.path.join(root, file)
            translate_markdown_file(fp)
            count += 1
            time.sleep(0.05) # prevent rate limiting

print(f"\n[SUCCESS] Completed full translation of {count} markdown files in tracks/!")
