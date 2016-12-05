# Schema Information

# users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null        
session_token   | string    | not null, indexed, unique

# notebooks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
author_id   | integer   | not null, foreign key (users), indexed
description | string    |

## notes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      |
author_id   | integer   | not null, foreign key (users), indexed
notebook_id | integer   | not null, foreign key (notebooks), indexed

# tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

# taggings

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
note_id     | integer   | not null, foreign key (notes), indexed
tag_id      | integer   | not null, foreign key (tags), indexed
