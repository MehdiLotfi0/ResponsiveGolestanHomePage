const btnDark = document.getElementById('themeToggle')

btnDark.addEventListener('click', () => {
  const html = document.documentElement
  const sun = document.getElementById('sun')
  const moon = document.getElementById('moon')

  html.classList.toggle('dark')

  const isDark = html.classList.contains('dark')

  if (isDark) {
    sun.classList.add('hidden')
    moon.classList.remove('hidden')
  } else {
    sun.classList.remove('hidden')
    moon.classList.add('hidden')
  }

  console.log('dark:', isDark)
})