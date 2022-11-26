import { React, useState } from 'react';
import Select from 'react-select';


const Color = () => {

    const colors = [{
        id: 1,
        label: "Lime",
    },
    {
        id: 2,
        label: "Lavender",
    },
    {
        id: 3,
        label: "Crimson",
    },
    {
        id: 4,
        label: "Darkblue",
    },
    {
        id: 5,
        label: "Teal",
    },
    {
        id: 5,
        label: "RebeccaPurple",
    },
    {
        id: 5,
        label: "GhostWhite",
    },
    {
        id: 5,
        label: "AquaMarine",
    },
    {
        id: 5,
        label: "AliceBlue",
    },
    ]

    const [color, setColor] = useState("");

    const click = (event) => {
        setColor(event.label);
    }
    return (
        <div>
            <style>
                {
                    `body{
                        background-color:` + color + ';'
                }
            </style>
            <Select options={colors} onChange={click}></Select>
        </div>

    );
}
export default Color;