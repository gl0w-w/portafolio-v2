import os
import re

components_dir = 'src/components'
files = [
    'section-inicio.astro',
    'section-about.astro',
    'tech&leng.astro',
    'cards.astro',
    'contacto.astro',
    'footer.astro',
    'header.astro'
]

# We will handle React Icons mapping
# For FontAwesome icons we will import from lucide-react or react-icons/fa
# Let's just use lucide-react since it's installed and very nice, but for brands we might need react-icons/fa or react-icons/fi.
# The user has lucide-react, react-icons installed. Let's use react-icons for brands.

for filename in files:
    filepath = os.path.join(components_dir, filename)
    if not os.path.exists(filepath):
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove AOS data attributes
    content = re.sub(r'\s*data-aos="[^"]+"\s*', ' ', content)
    content = re.sub(r'\s*data-aos-delay="[^"]+"\s*', ' ', content)
    
    # Fix paths
    content = content.replace('/static/img/', '/img/')
    content = content.replace('/static/CV', '/CV')
    
    # We also need to add the frontmatter imports if they don't exist and we replace icons.
    # Actually, replacing icons automatically might be messy, but let's try.
    icons_to_import = set()
    if 'fa-instagram' in content:
        content = content.replace('<i class="fa-brands fa-instagram text-2xl"></i>', '<FaInstagram className="text-2xl" />')
        icons_to_import.add('FaInstagram')
    if 'fa-github' in content:
        content = content.replace('<i class="fa-brands fa-github text-2xl"></i>', '<FaGithub className="text-2xl" />')
        content = content.replace('<i class="fa-brands fa-github mr-2"></i>', '<FaGithub className="mr-2 inline" />')
        icons_to_import.add('FaGithub')
    if 'fa-linkedin-in' in content:
        content = content.replace('<i class="fa-brands fa-linkedin-in text-2xl"></i>', '<FaLinkedinIn className="text-2xl" />')
        icons_to_import.add('FaLinkedinIn')
    if 'devicon-github-plain' in content:
        content = re.sub(r'<i\s+class="devicon-github-plain[^"]*"></i>', '<FaGithub className="text-3xl text-gray-400 group-hover:text-white transition-colors" />', content)
        icons_to_import.add('FaGithub')
    if 'fa-regular fa-envelope' in content:
        content = re.sub(r'<i\s+class="fa-regular fa-envelope[^"]*"></i>', '<FaEnvelope className="text-3xl text-gray-400 group-hover:text-white transition-colors" />', content)
        icons_to_import.add('FaEnvelope')
    if 'fa-brands fa-whatsapp' in content:
        content = re.sub(r'<i\s+class="fa-brands fa-whatsapp[^"]*"></i>', '<FaWhatsapp className="text-3xl text-gray-400 group-hover:text-white transition-colors" />', content)
        icons_to_import.add('FaWhatsapp')
    if 'devicon-linkedin-plain' in content:
        content = re.sub(r'<i\s+class="devicon-linkedin-plain[^"]*"></i>', '<FaLinkedin className="text-3xl text-gray-400 group-hover:text-white transition-colors" />', content)
        icons_to_import.add('FaLinkedin')
    if 'fa-brands fa-discord' in content:
        content = re.sub(r'<i\s+class="fa-brands fa-discord[^"]*"></i>', '<FaDiscord className="text-3xl text-gray-400 group-hover:text-white transition-colors" />', content)
        icons_to_import.add('FaDiscord')

    if icons_to_import:
        import_stmt = f"import {{ {', '.join(icons_to_import)} }} from 'react-icons/fa';\n"
        # check if there's already a frontmatter
        if content.startswith('---'):
            # insert after first ---
            content = content.replace('---\n', f'---\n{import_stmt}', 1)
        else:
            # prepend frontmatter
            content = f"---\n{import_stmt}---\n{content}"
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

