export {};

declare global {
	type Maybe<T> = T | null | undefined   // Maybe라는 타입을 정의! 그리고 제너릭으로 하나의 타입을 받을 건데 어떤 타입이 있냐면~ 제네릭으로 받은 타입 이던가 아니면 null, 아니면 undefined라는 타입을 정의!
}