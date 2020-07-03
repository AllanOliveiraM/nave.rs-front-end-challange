# coding: utf-8


from jsmin import jsmin


file_name = input('JS file name without extention in this path to minify: ')

# try:
file_to_minify = open(file_name + '.js', 'r')
data = jsmin(file_to_minify.read())

file_to_minify.close()

file_min = open(file_name + '.min.js', 'w')
file_min.write(data)
file_min.close()
print('Ok!')
# except Exception:
#     print('Invalid file or filename.')
