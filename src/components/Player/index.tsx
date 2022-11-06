import {
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  SpeakerSimpleHigh,
} from 'phosphor-react';

import {
  Container,
  Controls,
  MusicInformation,
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  TimeSlider,
  VolumeSlider,
} from './styles';

export function Player() {
  return (
    <Container>
      <MusicInformation>
        <img
          src="https://images.unsplash.com/photo-1570936100858-56eb3a5f5ae1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
          alt="Capa do álbum"
        />
        <strong>Gimme Shelter</strong>
        <strong>The Rolling Stones</strong>
      </MusicInformation>

      <Controls>
        <button type="button">
          <Shuffle weight="fill" />
        </button>
        <button type="button">
          <SkipBack weight="fill" />
        </button>
        <button type="button">
          <Play weight="fill" />
        </button>
        <button type="button">
          <SkipForward weight="fill" />
        </button>
        <button type="button">
          <Repeat weight="fill" />
        </button>
      </Controls>

      <TimeSlider>
        <p>0:12</p>
        <SliderRoot defaultValue={[50]} max={100} step={1}>
          <SliderTrack>
            <SliderRange />
          </SliderTrack>
          <SliderThumb />
        </SliderRoot>
        <p>4:30</p>
      </TimeSlider>

      <VolumeSlider>
        <button type="button">
          <SpeakerSimpleHigh weight="fill" />
        </button>
        <SliderRoot defaultValue={[0.5]} max={1} step={0.01}>
          <SliderTrack>
            <SliderRange />
          </SliderTrack>
          <SliderThumb />
        </SliderRoot>
      </VolumeSlider>
    </Container>
  );
}
