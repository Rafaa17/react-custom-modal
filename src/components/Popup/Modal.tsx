import React, { createElement, useCallback, useEffect, useRef, useState } from 'react';

interface IProps {
	hideModal: () => void;
	Component?: () => JSX.Element;
	ComponentJSX?: JSX.Element;
	componentProps: React.ComponentProps<any>
}

export default function Modal({ hideModal, Component, ComponentJSX, componentProps }: IProps) {

	const [ModalToRender, setModalToRender] = useState<JSX.Element | undefined>(undefined);

	const [animation, setAnimation] = useState<{ in: string, out: string }>({ in: '', out: '' });

	const { animationType, outAnimationType, allowOutsideClick = true, allowCloseOnEscKey = true } = componentProps;

	let timeout = useRef<ReturnType<typeof setTimeout> | null>();

	const hideMe = useCallback(() => {
		setAnimation({ out: `animate__animated animate__${outAnimationType} animate__faster`, in: '' })
	}, [outAnimationType]);

	const showMe = useCallback(() => {
		setAnimation({ out: '', in: `animate__animated animate__${animationType} animate__faster` })
	}, [animationType]);

	useEffect(() => {
		if (ModalToRender && !(Component || ComponentJSX)) {
			hideMe();
		} else if (Component || ComponentJSX) {
			showMe();
		}
		return () => {
			timeout.current && clearTimeout(timeout.current)
		};
	}, [Component, ComponentJSX, componentProps])

	useEffect(() => {

		if (animation.in && (Component || ComponentJSX)) {
			// @ts-ignore
			let c: JSX.Element | undefined;
			if (Component) {
				c = createElement(Component, {
					...componentProps, hideModal: hideModal
				});
			}
			setModalToRender(ComponentJSX || c);
		}

		if (animation.out) {
			if (!outAnimationType) {
				setModalToRender(undefined);
			} else
				timeout.current = setTimeout(() => {
					setModalToRender(undefined);
				}, 100);
		}

	}, [animation])

	useEffect(() => {
		const listenForEsc = ((evt: KeyboardEvent) => {
			if (['Esc', 'Escape'].indexOf(evt.key) !== -1) {
				hideModal();
			}
		});

		if (allowCloseOnEscKey && ModalToRender) {
			window.addEventListener('keydown', listenForEsc);
		}

		return () => {
			window.removeEventListener('keydown', listenForEsc);
		}
	}, [ModalToRender])

	if (!ModalToRender)
		return null;

	return (
		<ModalWrapper>
			<ModalBackdrop onClick={allowOutsideClick ? hideModal : () => {
			}} />
			<div className={`${animation.in || animation.out}`}>
				{ModalToRender}
			</div>
		</ModalWrapper>
	)

}

const ModalBackdrop = ({ onClick }: { onClick: () => void }) => {
	useEffect(() => {
		document.body.classList.add("react-custom-modal-open");

		return () => {
			document.body.classList.remove("react-custom-modal-open");
		};
	}, []);

	return (
		<div
			onClick={onClick}
			className={`react-custom-modal-backdrop`}
		>
		</div>
	);
};

const ModalWrapper = ({ children }: { children: any }) => (
	<div className="react-custom-modal-wrapper">{children}</div>
);