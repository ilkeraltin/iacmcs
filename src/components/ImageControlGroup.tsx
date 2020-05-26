import React, { useState, memo } from 'react';
import { Box, Button, ResponsiveContext } from 'grommet';
import { FormPrevious, FormNext, Nodes, StopFill, Deploy } from 'grommet-icons';
import SimulationSettingsModal from './SimulationSettingsModal';

interface ImageControls {
  handleNext: () => void;
  handlePrev: () => void;
  handleRandom: () => void;
  isNextDisabled: boolean;
  isPrevDisabled: boolean;
  handleSimulationClick: () => void;
  isSimulationActive: boolean;
  handleRangeChange: (a: string) => void;
  currentInterval: string;
}
const ImageControlGroup = ({
  handleNext,
  handlePrev,
  handleRandom,
  isNextDisabled,
  isPrevDisabled,
  handleSimulationClick,
  isSimulationActive,
  handleRangeChange,
  currentInterval,
}: ImageControls) => {
  const [show, setShow] = useState<boolean>(false);
  const screenSize: boolean = React.useContext(ResponsiveContext) === 'small';
  return (
    <>
      <SimulationSettingsModal
        isActive={show}
        handleCloseModal={setShow}
        currentInterval={currentInterval}
        handleStart={handleSimulationClick}
        handleRangeChange={handleRangeChange}
      />
      <Box
        align="center"
        justify="center"
        direction="row"
        gap="medium"
        pad="medium">
        {screenSize ? (
          <Box>
            <Box
              align="center"
              justify="center"
              direction="row"
              gap="small"
              margin={{ bottom: 'medium' }}>
              {isSimulationActive ? (
                <Button
                  label="Stop Auto Favorite"
                  icon={<StopFill />}
                  reverse={true}
                  color="status-warning"
                  primary={true}
                  onClick={handleSimulationClick}
                  size="small"
                />
              ) : (
                <Button
                  label="Auto Favorite Mode"
                  icon={<Deploy />}
                  reverse={true}
                  color="accent-4"
                  onClick={() => setShow(true)}
                  size="small"
                />
              )}
            </Box>
            <Box align="center" justify="center" direction="row" gap="medium">
              <Button
                icon={<FormPrevious />}
                onClick={handlePrev}
                disabled={isPrevDisabled}
                label="Prev"
                size="small"
              />
              <Button
                icon={<Nodes />}
                color="status-ok"
                onClick={handleRandom}
                size="small"
              />
              <Button
                reverse={true}
                icon={<FormNext />}
                onClick={handleNext}
                label="Next"
                disabled={isNextDisabled}
                size="small"
              />
            </Box>
          </Box>
        ) : (
          <Box
            align="center"
            justify="center"
            direction="row"
            gap="medium"
            pad="medium">
            <Button
              label="Prev"
              icon={<FormPrevious />}
              onClick={handlePrev}
              disabled={isPrevDisabled}
            />
            <Button
              label="Random"
              icon={<Nodes />}
              color="status-ok"
              onClick={handleRandom}
            />
            {isSimulationActive ? (
              <Button
                label="Stop Auto Favorite"
                icon={<StopFill />}
                reverse={true}
                color="status-warning"
                primary={true}
                onClick={handleSimulationClick}
              />
            ) : (
              <Button
                label="Auto Favorite Mode"
                icon={<Deploy />}
                reverse={true}
                color="accent-4"
                onClick={() => setShow(true)}
              />
            )}
            <Button
              label="Next"
              reverse={true}
              icon={<FormNext />}
              onClick={handleNext}
              disabled={isNextDisabled}
            />
          </Box>
        )}
      </Box>
    </>
  );
};

export default memo(ImageControlGroup);
