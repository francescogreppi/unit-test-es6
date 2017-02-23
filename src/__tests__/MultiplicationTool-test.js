import MultiplicationTool from '../MultiplicationTool';

describe('Multiplication Learning Tool', ()=>{
	 const instance = new MultiplicationTool();
	 const number = 9;
	 it('should instantiate an object',()=>{
		 expect(instance).toBeDefined();
	 })
	 describe('getMultiples method', ()=>{
	   it('should return an array',()=>{
			let result= instance.getMultiples(number);
			expect(result.constructor === Array).toBe(true);
		})
		it('should return an array with only multiples',()=>{
		    let i,
				check;
			let result= instance.getMultiples(number);
			for(i=0;i<result.length;i++){
				if(result[i]%number !== 0){
                    check = 'something is wrong';
				}
			}
			expect(typeof check).toBe('undefined');
		})
	 });
});