import { execSync } from 'child_process'
import * as path from 'path'
import * as fs from 'fs'

import * as Mustache from 'mustache'
;(function index() {
	if (process.argv.length === 3) {
		const componentPath = process.argv[2]
		const pathSplit = componentPath.split('/')

		const ComponentName = pathSplit[pathSplit.length - 1]

		const srcPath = path.join('scripts', 'templateUtils', 'component')
		const destPath = path.join('src', 'components', ...pathSplit)
		if (fs.existsSync(destPath)) {
			console.error(`Component '${ComponentName}' already exists!`)
			process.exit(1)
			return
		}
		fs.mkdirSync(destPath)

		console.log(`Generating component ${ComponentName}..`)

		for (const fileName of fs.readdirSync(srcPath)) {
			const fileContentRaw = fs.readFileSync(path.join(srcPath, fileName))
			const fileContent = fileContentRaw.toString('utf-8')

			const resContent = Mustache.render(
				fileContent,
				{
					ComponentName,
				},
				{},
				['<%', '%>'],
			)
			const filepath = path.join(
				destPath,
				fileName.replace('Component', ComponentName).replace('.mustache', ''),
			)
			fs.writeFileSync(filepath, resContent, { encoding: 'utf-8' })
			execSync(`git add ${filepath}`)
			console.log(filepath, '✅ ')
		}
	} else {
		console.error("Please provide component's name")
		process.exit(1)
	}
})()
