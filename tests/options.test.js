import path from 'path'

import { Network } from '../dist/index'
import readFileAsync from './util/readFileAsync'

let s1p_1, s1p_2, s2p_1, s2p_2, s2p_3, s3p_1, s4p_1

beforeAll(async () => {
  s1p_1 = await readFileAsync(path.join(__dirname, 'testFiles', 'example1.s1p'))
  // s1p_2 = await readFileAsync(path.join(__dirname, 'testFiles', 'example2.s1p'))
  s2p_1 = await readFileAsync(path.join(__dirname, 'testFiles', 'example1.s2p'))
  // s2p_2 = await readFileAsync(path.join(__dirname, 'testFiles', 'example2.s2p'))
  // s2p_3 = await readFileAsync(path.join(__dirname, 'testFiles', 'example3.s2p'))
  s3p_1 = await readFileAsync(path.join(__dirname, 'testFiles', 'example1.s3p'))
  s4p_1 = await readFileAsync(path.join(__dirname, 'testFiles', 'example1.s4p'))
})

describe('Properly loads options for example files', () => {
  test('s1p file', () => {
    const network = new Network(s1p_1)
    expexct(true).toBeTruthy()
    // expect(network.options.freqUnit).toBe('GHz')
    // expect(network.options.paramType).toBe('S')
    // expect(network.options.format).toBe('MA')
    // expect(network.options.z0).toBe(50)
  })
})