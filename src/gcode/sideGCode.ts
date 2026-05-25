const sfls = 
"(--left side front screw channel--)\n"+
"G90 (use absolute position)\n"+
"G20 (use inches)\n"+
"\n"+
"G0 X-.2 Y1.5\n"+
"G1 Z-.15 F30\n"+
"G1 X1.45\n"+
"\n"+
"(home)\n"+
"G0 Z1\n"+
"G0 X-2 Y0\n"+
"\n"+
"M30 (end program)\n"

const sfrs = 
"(--right side front screw channel--)\n"+
"G90 (use absolute position)\n"+
"G20 (use inches)\n"+
"\n"+
"G0 X2.2 Y1.5\n"+
"G1 Z-.15 F30\n"+
"G1 X0.55\n"+
"\n"+
"(home)\n"+
"G0 Z1\n"+
"G0 X-2 Y0\n"+
"\n"+
"M30 (end program)\n"

const sbls = 
"(--left side back screw channel--)\n"+
"G90 (use absolute position)\n"+
"G20 (use inches)\n"+
"\n"+
"G0 X-.2 Y2.5\n"+
"G1 Z-.15 F30\n"+
"G1 X1.45\n"+
"\n"+
"(home)\n"+
"G0 Z1\n"+
"G0 X-2 Y0\n"+
"\n"+
"M30 (end program)\n"

const sbrs = 
"(--right side back screw channel--)\n"+
"G90 (use absolute position)\n"+
"G20 (use inches)\n"+
"\n"+
"G0 X2.2 Y2.5\n"+
"G1 Z-.15 F30\n"+
"G1 X0.55\n"+
"\n"+
"(home)\n"+
"G0 Z1\n"+
"G0 X-2 Y0\n"+
"\n"+
"M30 (end program)\n"


const sflb = 
"(--left side front barrel hole--)\n"+
"G90 (use absolute position)\n"+
"G20 (use inches)\n"+
"\n"+
"G0 X0.5 Y1.5\n"+
"G1 Z-0.1 F30\n"+
"G02 X0.5 Y1.5 I0.0745\n"+
"\n"+
"G1 Z-0.2 F30\n"+
"G02 X0.5 Y1.5 I0.0745\n"+
"\n"+
"G1 Z-0.3 F30\n"+
"G02 X0.5 Y1.5 I0.0745\n"+
"\n"+
"G1 Z-0.4 F30\n"+
"G02 X0.5 Y1.5 I0.0745\n"+
"\n"+
"(home)\n"+
"G0 Z1\n"+
"G0 X-2 Y0\n"+
"\n"+
"M30 (end program)\n"


const sfrb = 
"(--right side front barrel hole--)\n"+
"G90 (use absolute position)\n"+
"G20 (use inches)\n"+
"\n"+
"G0 X1.5 Y1.5\n"+
"G1 Z-0.1 F30\n"+
"G02 X1.5 Y1.5 I-0.0745\n"+
"\n"+
"G1 Z-0.2 F30\n"+
"G02 X1.5 Y1.5 I-0.0745\n"+
"\n"+
"G1 Z-0.3 F30\n"+
"G02 X1.5 Y1.5 I-0.0745\n"+
"\n"+
"G1 Z-0.4 F30\n"+
"G02 X1.5 Y1.5 I-0.0745\n"+
"\n"+
"(home)\n"+
"G0 Z1\n"+
"G0 X-2 Y0\n"+
"\n"+
"M30 (end program)\n"


const sblb = 
"(--left side rear barrel hole--)\n"+
"G90 (use absolute position)\n"+
"G20 (use inches)\n"+
"\n"+
"G0 X0.5 Y2.5\n"+
"G1 Z-0.1 F30\n"+
"G02 X0.5 Y2.5 I0.0745\n"+
"\n"+
"G1 Z-0.2 F30\n"+
"G02 X0.5 Y2.5 I0.0745\n"+
"\n"+
"G1 Z-0.3 F30\n"+
"G02 X0.5 Y2.5 I0.0745\n"+
"\n"+
"G1 Z-0.4 F30\n"+
"G02 X0.5 Y2.5 I0.0745\n"+
"\n"+
"G1 X0.5745 Y2.5\n"+
"G1 Z-0.8 F10\n"+
"G1 Z-0.3 \n"+
"\n"+
"(home)\n"+
"G0 Z1\n"+
"G0 X-2 Y0\n"+
"\n"+
"M30 (end program)\n"


const sbrb = 
"(--right side rear barrel hole--)\n"+
"G90 (use absolute position)\n"+
"G20 (use inches)\n"+
"\n"+
"G0 X1.5 Y2.5\n"+
"G1 Z-0.1 F30\n"+
"G02 X1.5 Y2.5 I-0.0745\n"+
"\n"+
"G1 Z-0.2 F30\n"+
"G02 X1.5 Y2.5 I-0.0745\n"+
"\n"+
"G1 Z-0.3 F30\n"+
"G02 X1.5 Y2.5 I-0.0745\n"+
"\n"+
"G1 Z-0.4 F30\n"+
"G02 X1.5 Y2.5 I-0.0745\n"+
"\n"+
"G1 X1.4255 Y2.5\n"+
"G1 Z-0.8 F10\n"+
"G1 Z-0.3 \n"+
"\n"+
"\n"+
"(home)\n"+
"G0 Z1\n"+
"G0 X-2 Y0\n"+
"\n"+
"M30 (end program)\n"


export {sfls, sfrs, sbls, sbrs, sflb, sfrb, sblb, sbrb}