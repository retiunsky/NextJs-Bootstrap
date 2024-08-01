function HTMLExample() {
  return (
    <>
      <div
        style={{ marginTop: '50px', marginLeft: '50px' }}
        className='btn-group'
        role='group'
        aria-label='Basic checkbox toggle button group'
      >
        <input
          type='checkbox'
          className='btn-check'
          id='btncheck1'
          autocomplete='off'
        />
        <label className='btn btn-primary' for='btncheck1'>
          Checkbox 1
        </label>
        <input
          type='checkbox'
          className='btn-check'
          id='btncheck2'
          autocomplete='off'
        />
        <label className='btn btn-primary' for='btncheck2'>
          Checkbox 2
        </label>
        <input
          type='checkbox'
          className='btn-check'
          id='btncheck3'
          autocomplete='off'
        />
        <label className='btn btn-primary' for='btncheck3'>
          Checkbox 3
        </label>
      </div>

      <div
        style={{ marginTop: '50px', marginLeft: '50px' }}
        class='btn-group'
        role='group'
        aria-label='Basic radio toggle button group'
      >
        <input
          type='radio'
          className='btn-check'
          name='btnradio'
          id='btnradio1'
          autocomplete='off'
        />
        <label className='btn btn-outline-primary' for='btnradio1'>
          Radio 1
        </label>
        <input
          type='radio'
          className='btn-check'
          name='btnradio'
          id='btnradio2'
          autocomplete='off'
        />
        <label className='btn btn-outline-primary' for='btnradio2'>
          Radio 2
        </label>
        <input
          type='radio'
          className='btn-check'
          name='btnradio'
          id='btnradio3'
          autocomplete='off'
        />
        <label className='btn btn-outline-primary' for='btnradio3'>
          Radio 3
        </label>
      </div>
    </>
  );
}

export default HTMLExample;
