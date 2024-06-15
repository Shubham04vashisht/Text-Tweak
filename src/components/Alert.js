import React from 'react'; 

export default function Alert({alert}) {
  return (
    alert && <div className="alert alert-success" role="alert">
      <b>{alert.type}</b> : {alert.message}
    </div>
  )
}
