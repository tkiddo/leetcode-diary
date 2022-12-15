const { climbStairs } = require('./solution')

describe('climbStairs', () => {
  it('climbs 1 stair', () => {
    const result = climbStairs(1)
    expect(result).toEqual(1)
  })
  it('climbs 2 stairs', () => {
    const result = climbStairs(2)
    expect(result).toEqual(2)
  })
  it('climbs 3 stairs', () => {
    const result = climbStairs(3)
    expect(result).toEqual(3)
  })
  it('climbs 4 stairs', () => {
    const result = climbStairs(4)
    expect(result).toEqual(5)
  })
  it('climbs 5 stairs', () => {
    const result = climbStairs(5)
    expect(result).toEqual(8)
  })
  it('climbs 6 stairs', () => {
    const result = climbStairs(6)
    expect(result).toEqual(13)
  })
  it('climbs 7 stairs', () => {
    const result = climbStairs(7)
    expect(result).toEqual(21)
  })
  it('climbs 8 stairs', () => {
    const result = climbStairs(8)
    expect(result).toEqual(34)
  })
  it('climbs 9 stairs', () => {
    const result = climbStairs(9)
    expect(result).toEqual(55)
  })
  it('climbs 10 stairs', () => {
    const result = climbStairs(10)
    expect(result).toEqual(89)
  })
  it('climbs 11 stairs', () => {
    const result = climbStairs(11)
    expect(result).toEqual(144)
  })
  it('climbs 12 stairs', () => {
    const result = climbStairs(12)
    expect(result).toEqual(233)
  })
  it('climbs 13 stairs', () => {
    const result = climbStairs(13)
    expect(result).toEqual(377)
  })
  it('climbs 14 stairs', () => {
    const result = climbStairs(14)
    expect(result).toEqual(610)
  })
  it('climbs 15 stairs', () => {
    const result = climbStairs(15)
    expect(result).toEqual(987)
  })
})
