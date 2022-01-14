const formatter = new Intl.NumberFormat([], { maximumFractionDigits: 2 })

function formatAmount(number: string | number): string {
  const num = typeof number === "string" ? parseFloat(number) : number

  return formatter.format(num)
}

export { formatAmount }
