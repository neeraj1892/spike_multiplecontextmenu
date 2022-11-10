import './App.css';
import MyBox from "./MyBox";
import {useState} from "react";
import {Menu, MenuItem, Stack} from "@mui/material";

function App() {
    const [contextMenu, setContextMenu] = useState(null);
    const arr = [1, 2, 3, 4, 5];

    const handleContextMenu = (event) => {
        event.preventDefault();
        setContextMenu(
            contextMenu === null
                ? {
                    mouseX: event.clientX + 2,
                    mouseY: event.clientY - 6,
                }
                : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
                  // Other native context menus might behave different.
                  // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
                null,
        );
    };

    const handleContextMenuClose = () => {
        setContextMenu(null);
    };

    return (
        <Stack onContextMenu={handleContextMenu} style={{cursor: "context-menu"}}>
            {
                arr.map(item => {
                    return <>
                        <MyBox />
                        <Menu
                            open={contextMenu !== null}
                            onClose={handleContextMenuClose}
                            anchorReference="anchorPosition"
                            anchorPosition={
                                contextMenu !== null
                                    ? {top: contextMenu.mouseY, left: contextMenu.mouseX}
                                    : undefined
                            }>
                            <MenuItem>{`Option: ${item}`}</MenuItem>
                        </Menu>
                    </>
                })
            }
        </Stack>
    );
}

export default App;
