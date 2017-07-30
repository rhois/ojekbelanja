import React from 'react';
import { PropTypes as T } from 'prop-types';

import Button from '../Button';
import TextField from '../TextField';
import { escapeFloatingPoint, quantify, subtotal } from '../../services/product';

export default function ListItem({
  id,
  item,
  count,
  orderSet,
  orderRemove
}) {
  const onChange = (field, value) => {
    orderSet(field, escapeFloatingPoint(value));
  }

  const onBlur = (productId) => {
    if (count <= 0) {
      orderRemove(productId);
    }
  }

  const orderRemoveOrder = (productId) => {
    orderRemove(productId);
  }

  return (
    <table className="Pesanan-item">
      <tbody>
        <tr>
          <td className="Pesanan-item-image-wrapper">
            <img
              className="Pesanan-item-image"
              src={require(`../../css/images/${item.image}`)}
              alt={item.name}
              />
          </td>
          <td className="Pesanan-item-detail">
            <table width="100%">
              <tbody>
                <tr>
                  <td width="100%">
                    <div className="Pesanan-item-name">
                      {item.name}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="Pesanan-item-price-per-unit">
                    <span className="Pesanan-item-price">
                      {`Rp ${(item.price).toLocaleString('id')}`}
                    </span>
                    <span className="Pesanan-item-unit">
                      {`/${item.unit}`}
                    </span>
                    <div className="Pesanan-item-order-quantified">
                      {quantify(count, item.step, item.unit)}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="Pesanan-item-total-price">
                      {subtotal(count, item.step, item.price)}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="Pesanan-item-order-qty">
            <TextField
              className="Pesanan-item-order-qty-input"
              name={id}
              type="number"
              display="fixed"
              value={escapeFloatingPoint(count * item.step)}
              onChange={(name, value) => onChange(id, value / item.step)}
              onBlur={(name, value) => onBlur(id)}
              noValidation
              min={0}
              step={item.step}
              />
            <span className="Pesanan-item-order-qty-unit">
              {item.unit}
            </span>
          </td>
          <td className="Pesanan-item-order-qty-action">
            <Button
              display="icon"
              action={(e) => orderRemoveOrder(id)}
              icon="trash"
              text="Hapus"
              isSecondary
              isSmall
              />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

ListItem.propTypes = {
  id: T.string.isRequired,
  item: T.object.isRequired,
  count: T.number.isRequired,
  orderSet: T.func.isRequired,
  orderRemove: T.func.isRequired
}