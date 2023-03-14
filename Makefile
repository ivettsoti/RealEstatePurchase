build:
	daml build
	daml codegen js -o daml.js .daml/dist/*.dar
	daml damlc visual .daml/dist/RealEstatePurchase-0.0.1.dar --dot private-rp.dot
	dot -Tpng private-rp.dot > private-rp.png

deploy:
	mkdir -p deploy
	cp .daml/dist/*.dar deploy

clean:
	rm -rf .daml
	rm -rf daml.js
	rm -rf deploy
	rm -rf private-rp.dot
	rm -rf private-rp.png