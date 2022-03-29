// typescript decorators

//
// target is the class or function that the decorator is declared on.
// propertyKey is the name of the property that the decorator is declared on.
// descriptor is an object that describes the property that the decorator is declared on.
//

// property decorator
function ProportyDecorator(options: any) {
	return function (target: any, propertyKey: string) {
		let value: string;
		const getter = function () {
			// do something
			return value;
		};
		const setter = function (newVal: string) {
			// do something
			value = newVal;
		};
		Object.defineProperty(target, propertyKey, {
			get: getter,
			set: setter
		});
	}
}


// method decorator
function MethodDecorator() {
	return function (target: any, key: string, ds: PropertyDescriptor) {
		const originalMethod = ds.value;

		ds.value = async function (...args: any[]) {
			// do something before 
			const result = await originalMethod.apply(this, args);
			// do something after
			return result;
		}
		return ds;
	};
}