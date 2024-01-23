import { instantiateSidanUI } from '@sidan-lab/sidan-ui'

const { components } = instantiateSidanUI({
    colors: {
        light: {
            primary: '#2D63D8',
            secondary: '#3048A5',
            accent: '#4858A4',
            text: '#fff',
            background: '#1C1B1E',
        },
    },
    fonts: {
        primary: 'sans-serif',
        secondary: 'monospace',
    },
    fontSizes: {
        small: '0.8rem',
        medium: '1rem',
        large: '1.2rem',
    },
})

export const { Card, Button, Input, Overlay, OverlayInteract, Text } = components
