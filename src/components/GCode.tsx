import { useState, useMemo } from "react"
import { Modal } from "antd"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import TextArea from "antd/es/input/TextArea"

type GCodeProps = {
    title :string
    gCode :string
    color :string
    setColor :(c:string)=>void,
    numRows: number
}

// SVG Polygon and Modal for stiles
// return SVG polygon and associated modal with gcode to copy
// svg image will change color after copying 
export default function GCode({title, gCode, color, setColor, numRows}:GCodeProps){
    
    return(
        <>
             {gCode != undefined &&
                <table style={{margin:'auto'}}><tbody>
                    <tr>
                        <td >
                            <span style={{fontSize:'120%', fontWeight:'700'}}>{title}</span>
                            <CopyToClipboard
                                text = {gCode}
                                onCopy ={()=>setColor("red")}
                            >
                                <button style={{color:color==="red"?"red":"black", marginLeft:'30px', border:'1px solid gray', padding:'3px 8px'}}>
                                    {color==="red"?"copied":"copy"}
                                </button>
                            </CopyToClipboard>
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <TextArea
                                rows={numRows}
                                value={gCode}
                                style={{width:'350px',color:color==="red"?"red":"black"}}
                            />
                        </td>
                    </tr>
                </tbody></table>
            }
        </>
    )
}