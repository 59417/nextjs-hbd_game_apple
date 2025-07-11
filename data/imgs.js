export const txtTitle = '/title.png'
export const iconCheck = '/check.png'
export const iconHand = '/hand.png'
export const faceBad = '/bad_face.png'
export const faceGood = '/good_face.png'
export const iconUnlock = '/unlock.png'
export const iconInfo = '/envelope_info.png'

export const icon17 = '/17icon.png'
export const iconApple1 = '/apple_icon.png'
export const iconApple2 = '/apple_icon2.png'
export const iconApple3 = '/apple_icon3.png'
export const iconApple4 = '/apple_icon4.png'
export const picAppleIdx = '/apple_index.png'

export const btnApple = '/apple_btn.png'
export const picApples = '/apples.png'
export const picAppleHalf = '/apple_half.png'
export const picAppleGrey = '/apple_grey.png'
export const picAppleGold = '/golden_apple.png'
export const picAppleIdArr = Array.from({ length: 9 }, (_, index) => index + 1).map((n) =>
  n === 5 ? '' : `/pics/apple/apple${n}.JPG`
)

const [qa0101, qa0102, qa0103, qa0104] = [
  '/pics/qa01/qa01_2.JPG',
  '/pics/qa01/qa01_1.JPG',
  '/pics/qa01/qa01_3.JPG',
  '/pics/qa01/qa01_4.JPG',
]
const qa0201 = '/pics/qa02/qa02_1.JPG'
const qa0301 = '/pics/qa03/qa03_1.JPG'
const [qa0401, qa0402] = ['/pics/qa04/qa04_1.JPG', '/pics/qa04/qa04_2.JPG']
const [qa0501, qa0502, qa0503, qa0504] = [
  '/pics/qa05/qa05_1.JPG',
  '/pics/qa05/qa05_2.JPG',
  '/pics/qa05/qa05_3.JPG',
  '/pics/qa05/qa05_4.JPG',
]
const qa0601 = '/pics/qa06/qa06_1.JPG'
const qa0701 = '/pics/qa07/qa07_1.JPG'
const [qa0801, qa0802, qa0803, qa0804, qa0805, qa0806] = [
  '/pics/qa08/qa08_1.JPG',
  '/pics/qa08/qa08_2.JPG',
  '/pics/qa08/qa08_3.JPG',
  '/pics/qa08/qa08_5.JPG',
  '/pics/qa08/qa08_4.JPG',
  '/pics/qa08/qa08_6.JPG',
]
const [qa0901, qa0902, qa0903, qa0904] = [
  '/pics/qa09/qa09_1.JPG',
  '/pics/qa09/qa09_2.JPG',
  '/pics/qa09/qa09_3.JPG',
  '/pics/qa09/qa09_4.JPG',
]
const qa1001 = '/pics/qa10/qa10_1.png'

export const picMe = '/pics/me.JPG'
export const picFun = '/pics/fun.JPG'
export const picUsArr = Array.from({ length: 9 }, (_, index) => index).map(
  (n) => `/pics/us/us${n}.JPG`
)

export const QA_IMGS = {
  1: [qa0101, qa0102, qa0103, qa0104],
  2: [qa0201],
  3: [qa0301],
  4: [qa0401, qa0402],
  5: [qa0501, qa0502, qa0503, qa0504],
  6: [qa0601],
  7: [qa0701],
  8: [qa0801, qa0802, qa0803, qa0804, qa0805, qa0806],
  9: [qa0901, qa0902, qa0903, qa0904],
  10: [qa1001],
}
