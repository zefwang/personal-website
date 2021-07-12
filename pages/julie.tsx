import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

const Julie = () => {
  const [showBottom, setShowBottom] = useState<boolean>(false);

  return (
    <section className="birth-chart-section">
      <div className='chart-title'>Totally Legit Astrology Chart</div>
      <div className='date-input'>
        <form className="birthdate" noValidate autoComplete='off'>
          <TextField
            id='birthdate-field'
            variant='outlined'
            label='Birthday [yyyy-mm-dd]'
          />
        </form>
        <Button
          className='go-button'
          variant='contained'
          color='primary'
          onClick={() => setShowBottom(!showBottom)}
        >
          See results
        </Button>
      </div>
      { showBottom &&
        <div className='bottom-text'>
          THIS IS STUPID
          <div className='smaller-text'>
            also I have no idea what a birth chart or whatever because this is nonsense.
          </div>
        </div>
      }
    </section>
  )
}

export default Julie;
