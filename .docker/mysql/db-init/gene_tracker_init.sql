# create as many databases as you want
CREATE DATABASE IF NOT EXISTS testing;

# grant rights to user `user`
GRANT ALL ON testing.* TO 'gene_tracker'@'%';
