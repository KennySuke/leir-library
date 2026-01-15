#!/usr/bin/env python3
import os
from PIL import Image

root = "./public"
thumbs_root = os.path.join(root, "thumbs")

extensions = (".jpg", ".jpeg", ".png", ".webp")

for current_dir, dirs, files in os.walk(root):
    # Пропускаем папку thumbs и всё внутри неё
    if current_dir.startswith(thumbs_root):
        continue

    # Относительный путь от public
    rel_path = os.path.relpath(current_dir, root)

    # Папка назначения в thumbs
    thumbs_dir = os.path.join(thumbs_root, rel_path)

    # Создаём соответствующую подпапку
    os.makedirs(thumbs_dir, exist_ok=True)

    for filename in files:
        if not filename.lower().endswith(extensions):
            continue

        # Пропускаем файлы с thumb в имени
        if "thumb" in filename.lower():
            continue

        src_path = os.path.join(current_dir, filename)
        dst_path = os.path.join(thumbs_dir, filename)

        # Пропускаем, если миниатюра уже существует
        if os.path.exists(dst_path):
            print(f"Пропуск: {dst_path} уже существует")
            continue

        try:
            with Image.open(src_path) as img:
                img = img.convert("RGB")

                w_percent = 60 / img.width
                new_height = int(img.height * w_percent)

                img_small = img.resize((60, new_height), Image.LANCZOS)
                img_small.save(dst_path)

                print(f"Создано: {dst_path}")

        except Exception as e:
            print(f"Ошибка при обработке {src_path}: {e}")
