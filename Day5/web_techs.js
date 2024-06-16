const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  //5
  const tech = 'Sass'
  const searchTech = webTechs.includes(tech)

  if (!searchTech) {
    webTechs.push('Sass')
    console.log(webTechs)
  } else {
    console.log(`${tech} est un préprocessus CSS`)
  }

  //6
  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
  const backEnd = ['Node','Express', 'MongoDB']

  const fullStack = frontEnd.concat(backEnd)
  console.log(fullStack)