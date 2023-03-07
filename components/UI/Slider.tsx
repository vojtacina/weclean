import * as SliderPrimitive from '@radix-ui/react-slider';
import { styled } from '@stitches/react';
import { colors } from '../constants/colors';

const StyledSlider = styled(SliderPrimitive.Root, {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    touchAction: 'none',
    width: "100%",

    '&[data-orientation="horizontal"]': {
        height: 32,
    },

    '&[data-orientation="vertical"]': {
        flexDirection: 'column',
        width: 20,
        height: 100,
    },
});

const StyledTrack = styled(SliderPrimitive.Track, {
    backgroundColor: "rgb(209 213 219)",
    position: 'relative',
    flexGrow: 1,
    borderRadius: '9999px',

    '&[data-orientation="horizontal"]': { height: 1 },
    '&[data-orientation="vertical"]': { width: 1 },
});

const StyledRange = styled(SliderPrimitive.Range, {
    position: 'absolute',
    backgroundColor: 'rgb(209 213 219)',
    borderRadius: '9999px',
    height: '100%',
});

const StyledThumb = styled(SliderPrimitive.Thumb, {
    all: 'unset',
    display: 'block',
    width: 16,
    height: 16,
    backgroundColor: "#424242",
    boxShadow: `0 2px 10px rgb(209 213 219)`,
    borderRadius: 16,
    '&:hover': { backgroundColor: "#424242" },
    '&:focus': { boxShadow: `0 0 0 5px #00000020` },
});

interface SliderType {
    value: number,
    setValue: (to: number) => void,
    max: number
}

export default function Slider({ value, setValue, max }: SliderType) {


    return (
        <StyledSlider defaultValue={[0]} value={[value]} max={max} step={1} onValueChange={(what) => setValue(what[0])} >
            <StyledTrack>
                <StyledRange />
            </StyledTrack>
            <StyledThumb />
        </StyledSlider>
    )
}