// export const SessionModalStyle = {
//   overlay : {
//     position          : 'fixed',
//     top               : 0,
//     left              : 0,
//     right             : 0,
//     bottom            : 0,
//     backgroundColor   : 'rgba(255, 255, 255, 0.75)'
//   },
//   content : {
//     position                   : 'absolute',
//     top                        : '40px',
//     left                       : '40px',
//     right                      : '40px',
//     bottom                     : '40px',
//     border                     : '1px solid #ccc',
//     background                 : '#fff',
//     overflow                   : 'auto',
//     WebkitOverflowScrolling    : 'touch',
//     borderRadius               : '4px',
//     outline                    : 'none',
//     padding                    : '20px'
//
//   }
// };

export const SessionModalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(150, 150, 150, 0.75)'
  },
  content: {
    position: 'fixed',
    width: '400px',
    height: '300px',
    top: '40%',
    left: '50%',
    bottom: 'auto',
    right: 'auto',
    borderRadius: '10px',
    transform: 'translate(-50%,-50%)',
    boxShadow: '1px 1px 2px black',
    overflow: 'hidden'
  }
};
