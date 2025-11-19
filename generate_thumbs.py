#!/usr/bin/env python3
import os
from PIL import Image

root = "./public"
thumb_dir = os.path.join(root, "thumbs")

# Создаём папку для миниатюр, если её нет
os.makedirs(thumb_dir, exist_ok=True)

# Поддерживаемые расширения
extensions = (".jpg", ".jpeg", ".png", ".webp")

for filename in os.listdir(root):
    # Пропускаем, если это папка thumbs
    if filename.startswith("thumbs"):
        continue

    # Пропускаем файлы, которые уже миниатюры по названию
    if "thumb" in filename.lower():
        continue

    if filename.lower().endswith(extensions):
        src_path = os.path.join(root, filename)
        dst_path = os.path.join(thumb_dir, filename)

        # Пропускаем, если миниатюра уже создана
        if os.path.exists(dst_path):
            print(f"Пропуск: {dst_path} уже существует")
            continue

        # Открываем изображение
        img = Image.open(src_path)

        # Новая ширина 60px, высота рассчитывается автоматически
        w_percent = 60 / img.width
        new_height = int(img.height * w_percent)

        # Меняем размер
        img_small = img.resize((60, new_height), Image.LANCZOS)

        # Сохраняем миниатюру
        img_small.save(dst_path)

        print(f"Создано: {dst_path}")
