CREATE TABLE IF NOT EXISTS data (
    data_id serial primary key,
    prop_1 decimal not null,
    prop_2 decimal not null,
    prop_3 decimal not null,
    prop_4 decimal not null,
    child_w_asd boolean,
    fam_rec_serv boolean,
    age int,
    income int,
    education text
);