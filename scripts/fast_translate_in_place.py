import os
import re
import json
import urllib.request
import urllib.parse
import ssl
import sys

ctx = ssl._create_unverified_context()

def translate_str(text):
    if not text or not text.strip():
        return text
    
    s = text.strip()
    if s.startswith("```") or s.startswith("http://") or s.startswith("https://") or s.startswith("file://") or s.startswith("<p ") or s.startswith("<a "):
        return text

    # Mask inline code `code`
    inline_codes = []
    def mask_code(m):
        inline_codes.append(m.group(0))
        return f"__INLINECODE_{len(inline_codes)-1}__"
    masked = re.sub(r'`[^`]+`', mask_code, text)

    # Mask markdown links [text](url)
    links = []
    def mask_link(m):
        links.append((m.group(1), m.group(2)))
        return f"__LINK_{len(links)-1}__"
    masked = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', mask_link, masked)

    try:
        url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=id&dt=t&q=" + urllib.parse.quote(masked)
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, context=ctx, timeout=6) as response:
            data = json.loads(response.read().decode("utf-8"))
            result = "".join([part[0] for part in data[0] if part and len(part) > 0 and part[0]])

            # Restore markdown links
            for i, (label, link_target) in enumerate(links):
                result = result.replace(f"__LINK_{i}__", f"[{label}]({link_target})")

            # Restore inline codes
            for i, code in enumerate(inline_codes):
                result = result.replace(f"__INLINECODE_{i}__", code)

            return result
    except Exception:
        return text

def translate_file_in_place(file_path):
    print(f"[TRANSLATING IN PLACE] {os.path.relpath(file_path)}", flush=True)
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    out_lines = []
    in_code_block = False

    for line in lines:
        stripped = line.strip()

        if stripped.startswith("```"):
            in_code_block = not in_code_block
            out_lines.append(line)
            continue

        if in_code_block or not stripped:
            out_lines.append(line)
            continue

        if stripped.startswith("#"):
            match = re.match(r'^(#+\s*)(.+)$', stripped)
            if match:
                prefix, title = match.groups()
                out_lines.append(f"{prefix}{translate_str(title)}\n")
                continue

        if re.match(r'^(\*|-|\d+\.)\s+', stripped):
            match = re.match(r'^(\*|-|\d+\.)\s+(.+)$', stripped)
            if match:
                bullet, body = match.groups()
                out_lines.append(f"{bullet} {translate_str(body)}\n")
                continue

        if stripped.startswith(">"):
            match = re.match(r'^(>\s*)(.+)$', stripped)
            if match:
                prefix, quote = match.groups()
                out_lines.append(f"{prefix}{translate_str(quote)}\n")
                continue

        out_lines.append(f"{translate_str(stripped)}\n")

    with open(file_path, "w", encoding="utf-8") as f:
        f.writelines(out_lines)

if __name__ == "__main__":
    project_root = os.getcwd()

    # Process all track files first
    tracks_dir = os.path.join(project_root, "tracks")
    for root, dirs, files in os.walk(tracks_dir):
        for file in files:
            if file.endswith(".md") and not file.endswith(".id.md"):
                translate_file_in_place(os.path.join(root, file))

    print("\n[SUCCESS] All primary track .md files translated to Indonesian!", flush=True)
