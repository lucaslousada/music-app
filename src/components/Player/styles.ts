import styled from 'styled-components';
import * as Slider from '@radix-ui/react-slider';

export const Container = styled.div`
  position: fixed;
  bottom: 0;

  display: grid;
  grid-template-areas:
    'musicInformation controls volumeSlider'
    'musicInformation timeSlider volumeSlider';
  grid-template-columns: 183px auto 183px;
  align-items: center;
  gap: 31px 30px;

  width: 100%;
  padding: 0 96px;

  background: rgba(29, 33, 35, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
`;

export const MusicInformation = styled.div`
  grid-area: musicInformation;
  display: grid;
  grid-template-areas: 'img music' 'img artist';
  grid-template-columns: max-content auto;
  grid-template-rows: 26px auto;
  align-items: flex-start;
  gap: 0 13px;

  img {
    grid-area: img;
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 14px;
    box-shadow: 0px 15px 17px -10px rgba(0, 0, 0, 0.61);
  }

  strong:first-of-type {
    grid-area: music;
    padding: 5px 0 3px 0;
    font-size: 14px;
    color: #fff;
  }

  strong:last-of-type {
    grid-area: artist;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.44);
  }
`;

export const Controls = styled.div`
  grid-area: controls;
  display: flex;
  justify-self: center;
  gap: 0 36px;
  padding-top: 25px;

  button {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    line-height: 0;
    transition: background-color 0.2s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  svg {
    width: 16px;
    height: 16px;
  }

  button:nth-child(3) {
    background-color: ${({ theme }) => theme.colors.primary};
    transition: box-shadow 0.2s;

    &:hover {
      box-shadow: 0px 0px 18px rgba(255, 255, 255, 0.3);
    }

    svg {
      width: 9px;
      height: 9px;
      color: #efeee0;
    }
  }
`;

export const SliderRoot = styled(Slider.Root)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  &:hover ::after {
    visibility: visible;
  }
`;

export const SliderTrack = styled(Slider.Track)`
  position: relative;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 50px;
`;

export const SliderRange = styled(Slider.Range)`
  position: absolute;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
`;

export const SliderThumb = styled(Slider.Thumb)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: 0;

    &::after,
    &::before {
      visibility: visible;
    }
  }

  &::before {
    content: '';
    visibility: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 2px;
    border: 2px solid #fff;
    border-radius: 50%;
  }

  &::after {
    content: '';
    visibility: hidden;
    display: block;
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.92);
    border-radius: 50%;
  }
`;

export const TimeSlider = styled.div`
  grid-area: timeSlider;
  display: flex;
  padding-bottom: 20px;

  p {
    font-size: 10px;

    &:first-of-type {
      padding-right: 5px;
    }

    &:last-of-type {
      padding-left: 5px;
    }
  }
`;

export const VolumeSlider = styled.div`
  grid-area: volumeSlider;
  display: flex;
  gap: 0 5px;

  button {
    line-height: 0;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;
