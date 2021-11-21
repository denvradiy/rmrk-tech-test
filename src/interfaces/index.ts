export interface INft {
	block: number
	collectionId: string
	forsale: number
	id: string
	instance: string
	metadata: string
	name: string
	owner: string
	sn: string
	transferable: number
	__typename: string
	imageProps?: IImageProps
}

export interface IImageProps {
	description: string
	name: string
	attributes: []
	image: string
}
