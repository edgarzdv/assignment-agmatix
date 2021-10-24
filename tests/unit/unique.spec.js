import { uniqueNums } from '../../src/services/utils'

describe('unique function', () => {
  it('should return unique nums', () => {
    const arr = [1, 2, 34, 5, 8, 34, 1, 4, 34, 4, 7, 3]
    const res = uniqueNums(arr)
    expect(res).toEqual([1, 2, 34, 5, 8, 4, 7, 3])
  })
  it('should return only one unique number', () => {
    const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    const res = uniqueNums(arr)
    expect(res).toEqual([1])
  })
  it('should return the same array', () => {
    const arr = [1, 2, 3, 4, 5, 6]
    const res = uniqueNums(arr)
    expect(res).toEqual([1, 2, 3, 4, 5, 6])
  })
  it('should return an empty array because we send an empty array', () => {
    const arr = []
    const res = uniqueNums(arr)
    expect(res).toEqual([])
  })
  it('should return null because we send an null', () => {
    const arr = null
    const res = uniqueNums(arr)
    expect(res).toEqual(null)
  })
})


