import React, { PropTypes as T } from 'react';

import Button from '../../../components/Button';
import TextField from '../../../components/TextField';
import { validateEmail } from '../../../services/validation';
import '../../pages.css';
import './Pemesan.css';

export default function Pemesan(props) {
  const {
    user,
    update
  } = props;

  return (
    <div className="pemesan">
      <div className="pemesan-heading">
        <div className="pemesan-heading-title">
          <i className="fa fa-lg fa-address-card" aria-hidden="true"></i>
          {" Data Pemesan"}
        </div>
      </div>
      <div className="pemesan-body">
        <TextField
          name="name"
          label="Nama"
          placeholder="Nama Lengkap"
          value={user.name}
          update={update}
          required
          />
        <TextField
          name="nickname"
          label="Panggilan"
          placeholder="Nama Panggilan"
          value={user.nickname}
          update={update}
          />
        <TextField
          type="email"
          name="email"
          label="Email"
          placeholder="Alamat Email"
          value={user.email}
          update={update}
          validate={validateEmail}
          message="Alamat Email tidak valid"
          required
          />
      </div>
      <div className="pemesan-footer">
        <Button
          className="pemesan-footer-action"
          display="content"
          action={(e) => console.log('Lanjutkan')}
          icon="arrow-right"
          text="Lanjutkan"
          />
      </div>

    </div>
  )
}

Pemesan.propTypes = {
  user: T.object.isRequired,
  update: T.func.isRequired
}
