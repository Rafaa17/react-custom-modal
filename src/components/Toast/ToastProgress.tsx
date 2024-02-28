import React, {useCallback, useEffect, useRef, useState} from 'react';

export default function ToastProgress({timeout, color}: { timeout: number, color?: string }) {

	const [width, setWidth] = useState(1);
	const timer = useRef<ReturnType<typeof setTimeout> | null>();

	const progress = useCallback(() => {
		if (width < 100) {
			timer.current = setTimeout(() => {
				setWidth(width + 1)
			},timeout / 105)
		}
	},[width, timeout])

	useEffect(() => {
		progress();
		return () => {
			if (timer.current) {
				clearTimeout(timer.current);
			}
		}
	},[timeout, width, timer])


	return (
		<div className={'react-custom-toast-progress'} style={{ width: `${width}%`, background: color ?? 'gray' }}/>
	)

}