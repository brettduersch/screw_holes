import { useState } from 'react'
import './App.css'
import GCode from './components/GCode'
import { sfls, sfrs, sbls, sbrs, sflb, sfrb, sblb, sbrb } from './gcode/sideGCode'
import { bfls, bfrs, bbls, bbrs, bflb, bfrb, bblb, bbrb } from './gcode/backGCode'


function App() {

  const [screwColor, setScrewColor] = useState<string>('black')
  const [barrelColor, setBarrellColor] = useState<string>('black')
  const [screwGCode, setScrewGCode] = useState<string>('select cut')
  const [barrelGCode, setBarrelGCode] = useState<string>('select cut')
  const [selected, setSelected] = useState<string>('')


  function makeGCode(part: string) {

    if (part === 'sfl') {
      setScrewGCode(sfls)
      setBarrelGCode(sflb)
      setSelected('Side Front Left')
    } else if (part === 'sfr') {
      setScrewGCode(sfrs)
      setBarrelGCode(sfrb)
      setSelected('Side Front Right')
    } else if (part === 'sbl') {
      setScrewGCode(sbls)
      setBarrelGCode(sblb)
      setSelected('Side Back Left')
    } else if (part === 'sbr') {
      setScrewGCode(sbrs)
      setBarrelGCode(sbrb)
      setSelected('Side Back Right')
    } else if (part === 'bfl') {
      setScrewGCode(bfls)
      setBarrelGCode(bflb)
      setSelected('Bottom Front Left')
    } else if (part === 'bfr') {
      setScrewGCode(bfrs)
      setBarrelGCode(bfrb)
      setSelected('Bottom Front Right')
    } else if (part === 'bbl') {
      setScrewGCode(bbls)
      setBarrelGCode(bblb)
      setSelected('Bottom Back Left')
    } else if (part === 'bbr') {
      setScrewGCode(bbrs)
      setBarrelGCode(bbrb)
      setSelected('Bottom Back Right')
    }


    setScrewColor('black')
    setBarrellColor('black')
  }


  return (
    <>
      <table>
        <tr>
          <td style={{ border: selected === "Side Front Left" ? '1px solid blue' : 'none' }}>
            Side Front Left<br /><img src="side_front_left.png" alt="sfl" width={200} onClick={() => makeGCode('sfl')} />
          </td>
          <td style={{ border: selected === "Side Front Right" ? '1px solid blue' : 'none' }}>
            Side Front Right<br /><img src="side_front_right.png" alt="sfr" width={200} onClick={() => makeGCode('sfr')} />
          </td>
          <td rowSpan={2} style={{ paddingLeft: '50px'}}>
            <p style={{ fontSize: '150%', color: 'darkblue', fontWeight: '900', margin:0, marginBottom:'15px'}}>{selected}</p>
            <GCode
              title='Screw Hole'
              gCode={screwGCode}
              color={screwColor}
              setColor={setScrewColor}
              numRows={14}
            />
          </td>
        </tr>
        <tr>
          <td style={{ border: selected === "Side Back Left" ? '1px solid blue' : 'none' }}>
            Side Back Left<br /><img src="side_back_left.png" alt="sbl" width={200} onClick={() => makeGCode('sbl')} />
          </td>
          <td style={{ border: selected === "Side Back Right" ? '1px solid blue' : 'none' }}>Side Back Right
            <br /><img src="side_back_right.png" alt="sbr" width={200} onClick={() => makeGCode('sbr')} />
          </td>
        </tr>
        <tr>
          <td style={{ border: selected === "Bottom Front Left" ? '1px solid blue' : 'none' }}>
            Bottom Front Left<br /><img src="bottom_front_left.png" alt="bfl" width={200} onClick={() => makeGCode('bfl')} />
          </td>
          <td style={{ border: selected === "Bottom Front Right" ? '1px solid blue' : 'none' }}>
            Bottom Front Right<br /><img src="bottom_front_right.png" alt="bfr" width={200} onClick={() => makeGCode('bfr')} />
          </td>
          <td rowSpan={2} style={{ paddingLeft: '50px' }}>
            <GCode
              title='Barrel Nut Hole'
              gCode={barrelGCode}
              color={barrelColor}
              setColor={setBarrellColor}
              numRows={15}
            />
          </td>
        </tr>
        <tr>
          <td style={{ border: selected === "Bottom Back Left" ? '1px solid blue' : 'none' }}>
            Bottom Back Left<br /><img src="bottom_back_left.png" alt="bbl" width={200} onClick={() => makeGCode('bbl')} />
          </td>
          <td style={{ border: selected === "Bottom Back Right" ? '1px solid blue' : 'none' }}>
            Bottom Back Right<br /><img src="bottom_back_right.png" alt="bbr" width={200} onClick={() => makeGCode('bbr')} />
          </td>
        </tr>
      </table>
    </>
  )
}

export default App
