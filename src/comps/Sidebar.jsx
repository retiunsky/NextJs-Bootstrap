import { useState } from 'react';
import { List } from 'react-bootstrap-icons';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AlwaysOpenExample from './AccordionComp';

export default function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        style={{
          background: 'transparent',
          border: 'none',
        }}
        onClick={handleShow}
      >
        <List />
      </button>

      <Offcanvas show={show} onHide={handleClose}>
        <div
          style={{ height: '100%', paddingTop: '50px' }}
          className='list-group-item list-group-item-light'
        >
          <Offcanvas.Header>
            <Offcanvas.Title>Sidebar</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
          <AlwaysOpenExample />
        </div>
      </Offcanvas>
    </>
  );
}
