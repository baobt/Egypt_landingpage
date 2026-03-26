function FloatingContact() {
  const phoneNumber = '+84906927780';
  const zaloNumber = phoneNumber.replace('+', '');

  return (
    <div className="floating-contact">
      <a
        href={`https://zalo.me/${zaloNumber}`}
        target="_blank"
        rel="noreferrer"
        className="floating-contact__zalo"
      >
        <i className="material-symbols-outlined">chat</i>
      </a>
      <a href={`tel:${phoneNumber}`} className="floating-contact__call">
        <i className="material-symbols-outlined">call</i>
      </a>
    </div>
  );
}

export default FloatingContact;
