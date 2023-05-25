# etch-a-sketch
This project is a project undertaken as part of `The Odin Project` learning web course teaching `HTML`, `CSS` and `JavaScript` skills. It involved putting into practice the teachings of `JavaScript` taught in the previous lessons and required the active use of research and preparation to find the correct JavaScript methods to use.

The use of JavaScript is highly introduced within this project to demonstrate my skills in DOM methods and the manipulation of `HTML` and `CSS` from `JavaScript`. Etch-a-Sketch aims to provide a simple drawing application that enables the user to adjust the canvas size, select a colour, clear and erase drawn areas. Through the use of event listeners and element IDs, the project is capable of assessing whether the user has clicked onto the canvas and if the user drags their cursor over canvas cells. It would be the functions triggered by the event listeners that enable the interaction with the page such as changing the cell background colour.

The buttons that enable the user to manipulate the canvas in Etch-a-Sketch are contained within a toolbar within several tabs. Tab labels are shown above each tab and consist of colour, mode, tool and layout tabs. Toolbar tabs use the wrap style within the flexwrap property which enable them to snap to multiline when there is not enough space on smaller screen sizes. The canvas size also shrinks and centers itself based upon the width of the device.

## Features

- **Responsive User Interface** - The project provides a responsive user interface that enables the same experience across both mobile and desktop devices. Elements in the toolbar contain the wrap styling to drop to multiple lines if space does not occupy them on the same line. The canvas size is decreased and centered to appear in the correct manner on smaller devices.

- **Adjustable Canvas Sizes** - The canvas itself can have its grid adjusted so that the number of cells that occupy the same space are altered. This means that the user can have more detail in their drawing and can adjust this setting to suit their needs.

- **Range of colours** - The project allows the use of a range of colours to draw on the canvas. This can be manipulated through the colour input on the toolbar which when clicked, will show a box which allows the user to drag the pointer to the colour they like. Upon the change, the new colour is set as the current colour and this is the colour used when drawing on the canvas.

- **Different Modes** - The user is able to select between draw and erase mode. The mode currently selected is shown through the active class which changes the active mode button's background colour. Draw mode which apply the current colour to the cells the user drags the mouse over. Erase mode will return these cells to their original colour, erasing them from the drawing.

- **Scalable design and features** - As a simple drawing application, Etch-a-Sketch has capabilities to improve with more features and its scalable design. There is space on the toolbar and space around the canvas for further tools, features and elements and so offers opportunities for expansion.

- **Toggle Guidelines** - An extra feature included is the use of guidelines which can be toggled with the guidelines button. These will apply a light grey border to all cells in the canvas which make it easier to see the ends of the individual pixels and to draw with more accuracy. Like the mode buttons, when enabled, the button will show a different background colour. The button can be clicked again to turn the guidelines off.