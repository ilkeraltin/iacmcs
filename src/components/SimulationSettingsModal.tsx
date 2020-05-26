import React from 'react';
import { Box, Button, Heading, RangeInput, Layer } from 'grommet';
import { Play } from 'grommet-icons';

interface Controls {
  handleStart: () => void;
  handleRangeChange: (a: string) => void;
  isActive: boolean;
  currentInterval: string;
  handleCloseModal: (a: boolean) => void;
}

const SimulationSettingsModal = ({
  handleStart,
  isActive,
  handleRangeChange,
  currentInterval,
  handleCloseModal,
}: Controls) => {
  return (
    <>
      {isActive && (
        <Layer
          onEsc={() => handleCloseModal(false)}
          onClickOutside={() => handleCloseModal(false)}>
          <Box
            align="center"
            justify="center"
            fill="horizontal"
            pad="large"
            gap="large"
            direction="column">
            <Heading level={3}>Start auto-favorite simulation</Heading>
            <Heading level={1}>{currentInterval} sn</Heading>
            <RangeInput
              min={1}
              step={1}
              value={currentInterval}
              max={10}
              onChange={(event: React.ChangeEvent<any>) =>
                handleRangeChange(event.target.value)
              }
            />
            <Box
              align="center"
              justify="center"
              direction="row"
              gap="medium"
              pad="xsmall">
              <Button
                label="Start"
                icon={<Play />}
                reverse={true}
                color="status-ok"
                onClick={() => {
                  handleStart();
                  handleCloseModal(false);
                }}
              />
              <Button
                label="Cancel"
                color="status-critical"
                onClick={() => handleCloseModal(false)}
              />
            </Box>
          </Box>
        </Layer>
      )}
    </>
  );
};

export default SimulationSettingsModal;
