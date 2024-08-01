function FormsExample() {
  return (
    <div
      style={{
        marginLeft: '50px',
        // , width: '50vw'
      }}
    >
      {/* <div>
          <label for='exampleInputEmail1' className='form-label mt-4'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='Enter email'
          />
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div> */}

      {/* <div>
          <label for='exampleSelect1' className='form-label mt-4'>
            Example select
          </label>
          <select className='form-select' id='exampleSelect1'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div> */}

      {/* <div>
          <label for='formFile' className='form-label mt-4'>
            Default file input example
          </label>
          <input className='form-control' type='file' id='formFile' />
        </div> */}
      <legend className='mt-4'>Radio buttons</legend>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name='optionsRadios'
          id='optionsRadios1'
          value='option1'
        />
        <label className='form-check-label' for='optionsRadios1'>
          Option one is this and that—be sure to include why it's great
        </label>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name='optionsRadios'
          id='optionsRadios2'
          value='option2'
        />
        <label className='form-check-label' for='optionsRadios2'>
          Option two can be something else and selecting it will deselect option
          one
        </label>
      </div>
      <legend className='mt-4'>Checkbox</legend>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='checkbox'
          value=''
          id='flexCheckDefault'
        />
        <label className='form-check-label' for='flexCheckDefault'>
          Default checkbox
        </label>
      </div>
      <legend className='mt-4'>Switch</legend>
      <div className='form-check form-switch'>
        <input
          className='form-check-input'
          type='checkbox'
          id='flexSwitchCheckDefault'
        />
        <label className='form-check-label' for='flexSwitchCheckDefault'>
          Default switch checkbox input
        </label>
      </div>
    </div>
  );
}

export default FormsExample;
