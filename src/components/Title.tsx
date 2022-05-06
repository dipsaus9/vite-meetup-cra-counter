import './Title.scss';

interface TitleProps {
	children: string;
}

export function Title({ children }: TitleProps) {
	return <h3 className='title'>{children}</h3>;
}
