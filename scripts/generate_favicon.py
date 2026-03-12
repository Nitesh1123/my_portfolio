import os
from PIL import Image, ImageDraw, ImageFont

def create_favicon():
    size = (32, 32)
    # Create black background
    img = Image.new('RGBA', size, color='#0A0A0A')
    draw = ImageDraw.Draw(img)
    
    # Try to load Arial or fallback
    try:
        font = ImageFont.truetype("arialbd.ttf", 22)
    except IOError:
        try:
            font = ImageFont.truetype("arial.ttf", 22)
        except IOError:
            font = ImageFont.load_default()
            
    text = "NK"
    
    # Calculate text position to center it
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    x = (size[0] - text_width) / 2
    # Adjust manually for vertical centering depending on font baseline
    y = ((size[1] - text_height) / 2) - 4 
    
    # Draw text in primary green color
    draw.text((x, y), text, fill='#4ADE80', font=font)
    
    # Resolve public directory path
    public_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'public')
    os.makedirs(public_dir, exist_ok=True)
    
    png_path = os.path.join(public_dir, 'favicon.png')
    ico_path = os.path.join(public_dir, 'favicon.ico')
    
    # Save as PNG
    img.save(png_path)
    # Save as ICO
    img.save(ico_path, format='ICO')
    
    print(f"Successfully generated {png_path} and {ico_path}")

if __name__ == "__main__":
    create_favicon()
