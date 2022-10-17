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
    backgroundColor: "#E8E8E8",
    position: 'relative',
    flexGrow: 1,
    borderRadius: '9999px',

    '&[data-orientation="horizontal"]': { height: 2 },
    '&[data-orientation="vertical"]': { width: 2 },
});

const StyledRange = styled(SliderPrimitive.Range, {
    position: 'absolute',
    backgroundColor: '#E8E8E8',
    borderRadius: '9999px',
    height: '100%',
});

const StyledThumb = styled(SliderPrimitive.Thumb, {
    all: 'unset',
    display: 'block',
    width: 16,
    height: 16,
    backgroundColor: colors.blue.dark,
    boxShadow: `0 2px 10px #E8E8E8`,
    borderRadius: 16,
    '&:hover': { backgroundColor: colors.blue.primary },
    '&:focus': { boxShadow: `0 0 0 5px ${colors.blue.primary}20` },
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