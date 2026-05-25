const bfls = 
"(--left bottom front screw channel--)\n"+
"G90 (use absolute position)\n"+
"G20 (use inches)\n"+
"\n"+
"G0 X0.75 Y-0.2\n"+
"G1 Z-.15 F30\n"+
"G1 Y1.45\n"+
"\n"+
"(home)\n"+
"G0 Z1\n"+
"G0 X-2 Y0\n"+
"\n"+
"M30 (end program)\n"

const bfrs = 
"(--right bottom front screw channel--)\n"+
"G90 (use absolute position)\n"+
"G20 (use inches)\n"+
"\n"+
"G0 X2.25 Y-0.2\n"+
"G1 Z-.15 F30\n"+
"G1 Y1.45\n"+
"\n"+
"(home)\n"+
"G0 Z1\n"+
"G0 X-2 Y0\n"+
"\n"+
"M30 (end program)\n"

const bbls = 
"(--left bottom back screw channel--)\n"+
"G90 (use absolute position)\n"+
"G20 (use inches)\n"+
"\n"+
"G0 X0.75 Y-0.2\n"+
"G1 Z-.15 F30\n"+
"G1 Y1.45\n"+
"\n"+
"(home)\n"+
"G0 Z1\n"+
"G0 X-2 Y0\n"+
"\n"+
"M30 (end program)\n"

const bbrs = 
"(--right bottom back screw channel--)\n"+
"G90 (use absolute position)\n"+
"G20 (use inches)\n"+
"\n"+
"G0 X1.25 Y-0.2\n"+
"G1 Z-.15 F30\n"+
"G1 Y1.45\n"+
"\n"+
"(home)\n"+
"G0 Z1\n"+
"G0 X-2 Y0\n"+
"\n"+
"M30 (end program)\n"


const bflb = 
"(--left bottom front barrel hole--)\n"+
"G90 (use absolute position)\n"+
"G20 (use inches)\n"+
"\n"+
"G0 X0.75 Y0.5\n"+
"G1 Z-0.1 F30\n"+
"G02 X0.75 Y0.5 J0.0745\n"+
"\n"+
"G1 Z-0.2 F30\n"+
"G02 X0.75 Y0.5 J0.0745\n"+
"\n"+
"G1 Z-0.3 F30\n"+
"G02 X0.75 Y0.5 J0.0745\n"+
"\n"+
"G1 Z-0.4 F30\n"+
"G02 X0.75 Y0.5 J0.0745\n"+
"\n"+
"(home)\n"+
"G0 Z1\n"+
"G0 X-2 Y0\n"+
"\n"+
"M30 (end program)\n"


const bfrb = 
"(--right bottom front barrel hole--)\n"+
"G90 (use absolute position)\n"+
"G20 (use inches)\n"+
"\n"+
"G0 X2.25 Y0.5\n"+
"G1 Z-0.1 F30\n"+
"G02 X2.25 Y0.5 J0.0745\n"+
"\n"+
"G1 Z-0.2 F30\n"+
"G02 X2.25 Y0.5 J0.0745\n"+
"\n"+
"G1 Z-0.3 F30\n"+
"G02 X2.25 Y0.5 J0.0745\n"+
"\n"+
"G1 Z-0.4 F30\n"+
"G02 X2.25 Y0.5 J0.0745\n"+
"\n"+
"(home)\n"+
"G0 Z1\n"+
"G0 X-2 Y0\n"+
"\n"+
"M30 (end program)\n"



const bblb = 
"(--left bottom rear barrel hole--)\n"+
"G90 (use absolute position)\n"+
"G20 (use inches)\n"+
"\n"+
"G0 X0.75 Y0.5\n"+
"G1 Z-0.1 F30\n"+
"G02 X0.75 Y0.5 J0.0745\n"+
"\n"+
"G1 Z-0.2 F30\n"+
"G02 X0.75 Y0.5 J0.0745\n"+
"\n"+
"G1 Z-0.3 F30\n"+
"G02 X0.75 Y0.5 J0.0745\n"+
"\n"+
"G1 Z-0.4 F30\n"+
"G02 X0.75 Y0.5 J0.0745\n"+
"\n"+
"G1 X0.75 Y0.5745\n"+
"G1 Z-0.8 F10\n"+
"G1 Z-0.3 \n"+
"\n"+
"(home)\n"+
"G0 Z1\n"+
"G0 X-2 Y0\n"+
"\n"+
"M30 (end program)\n"


const bbrb = 
"(--right bottom rear barrel hole--)\n"+
"G90 (use absolute position)\n"+
"G20 (use inches)\n"+
"\n"+
"G0 X1.25 Y0.5\n"+
"G1 Z-0.1 F30\n"+
"G02 X1.25 Y0.5 J0.0745\n"+
"\n"+
"G1 Z-0.2 F30\n"+
"G02 X1.25 Y0.5 J0.0745\n"+
"\n"+
"G1 Z-0.3 F30\n"+
"G02 X1.25 Y0.5 J0.0745\n"+
"\n"+
"G1 Z-0.4 F30\n"+
"G02 X1.25 Y0.5 J0.0745\n"+
"\n"+
"G1 X1.25 Y0.5745\n"+
"G1 Z-0.8 F10\n"+
"G1 Z-0.3 \n"+
"\n"+
"(home)\n"+
"G0 Z1\n"+
"G0 X-2 Y0\n"+
"\n"+
"M30 (end program)\n"



export {bfls, bfrs, bbls, bbrs, bflb, bfrb, bblb, bbrb}