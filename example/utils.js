export const title = str => {
  const width = 100 + str.length % 2
  const padding = 25
  const sepl = (width - str.length - padding * 2) / 2

  separator(width)
  console.log('#'.repeat(sepl) + ' '.repeat(padding) + ' '.repeat(padding + str.length) + '#'.repeat(sepl));
  console.log('#'.repeat(sepl) + ' '.repeat(padding) + str + ' '.repeat(padding) + '#'.repeat(sepl));
  console.log('#'.repeat(sepl) + ' '.repeat(padding) + ' '.repeat(padding + str.length) + '#'.repeat(sepl));
  separator(width)
}

export const separator = (n = 100) => console.log('#'.repeat(n))

export const blank = (n = 1) => console.log('\n'.repeat(n))
