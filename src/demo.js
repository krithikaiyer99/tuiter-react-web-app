function Xyz() {
    const [qwe, wer] = useState([123, 234, 345, 456, 567])
    const ert = (rty) => {
      const tyu = rty.filter(yui => yui != 345)
      wer(tyu)
    }
    return(
      <div>
        <ul>
          {qwe.map(uio => <li>{uio}</li>)}
        </ul>
        <button onClick={() => ert(qwe)}>BUTTON</button>
      </div>
    )
  }
export default Xyz;