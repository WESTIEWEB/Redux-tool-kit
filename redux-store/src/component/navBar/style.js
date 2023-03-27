import { styled , makeStyles } from '@material-ui/core/styles';

export const NavBarContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    height: '3em',
    alignItems: 'center',
    backgroundColor: '#6ba4f5',
    paddingLeft: '1.5em',
    paddingTop: '1.5em',
    paddingBottom: '1.5em',
    paddingRight: '1.5em'
});

export const useStyle = makeStyles(theme => ({
    cartBox : {
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
    }
}));

export const CartParagraph = styled('p')({
    position: 'absolute',
    left: '1.9em',
    bottom: '1em',
    width: '1.5em',
    padding: '0.1em',
    margin: '0',
    fontSize: '0.7em',
    borderRadius: '50%',
    textAlign: 'center',
    // borderRadius: '50%',
    backgroundColor: '#f8f6f6',
});