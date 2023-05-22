const mongoose = require('mongoose')
const {Schema} = mongoose;

const RepositorySchema= new Schema({
    id : {
        type: String,
        required: true},
    assignable_users: {
        type: Number,
        required: false},
    code_of_conduct: {
        type: String,
        required: false},
    created_at :{
        type: Date,
        required:false
    },
    database_id: {
        type: Number,
        required: false},
    default_branch: {
        type: String,
        required: false},
    delete_branch_on_merge: {
        type: Boolean,
        required: false},
    description: {
        type: String,
        required: false},
    disk_usage: {
        type: Number,
        required: false},
    forks: {
        type: Number,
        required: false},
    funding_links: {
        type: String,
        required:false},
    has_issues_enabled: {
        type: Boolean,
        required: false},
    has_projects_enabled: {
        type: Boolean,
        required: false},
    has_wiki_enabled: {
        type: Boolean,
        required: false},
    homepage_url: {
        type: String,
        required: false},
    is_archived: {
        type: Boolean,
        required: false},
    is_blank_issues_enabled: {
        type: Boolean,
        required: false},
    is_disabled: {
        type: Boolean,
        required: false},
    is_empty: {
        type: Boolean,
        required: false},
    is_fork: {
        type: Boolean,
        required: false},
    is_in_organization: {
        type: Boolean,
        required: false},
    is_locked: {
        type: Boolean,
        required: false},
    is_mirror: {
        type: Boolean,
        required: false},
    is_private: {
        type: Boolean,
        required: false},
    is_security_policy_enabled: {
        type: Boolean,
        required: false},
    is_template: {
        type: Boolean,
        required: false},
    is_user_configuration_repository: {
        type: Boolean,
        required: false},
    issues: {
        type: Number,
        required: false},
    labels: {
        type: Number,
        required: false},
    languages: {
        type: String,
        required:false},
    license_info: {
        type: String,
        required: false},
    lock_reason: {
        type: String,
        required: false},
    mentionable_users: {
        type: Number,
        required: false},
    merge_commit_allowed: {
        type: Boolean,
        required: false},
    milestones: {
        type: Number,
        required: false},
    mirror_url: {
        type: String,
        required: false},
    name: {
        type: String,
        required: false},
    name_with_owner : {
        type: String,
        required: true},
    open_graph_image_url: {
        type: String,
        required: false},
    owner : {
        type: String,
        required: true},
    parent: {
        type: String,
        required: false},
    primary_language: {
        type: String,
        required: false},
    pushed_at :{
        type: Date,
        required:false
    },
    pull_requests: {
        type: Number,
        required: false},
    rebase_merge_allowed: {
        type: Boolean,
        required: false},
    releases: {
        type: Number,
        required: false},
    repository_topics: {type: String, required:false},
    squash_merge_allowed: {
        type: Boolean,
        required: false},
    stargazers: {
        type: Number,
        required: false},
    tags: {
        type: Number,
        required: false},
    template_repository: {
        type: String,
        required: false},
    updated_at :{
        type: Date,
        required:false
    },
    url: {
        type: String,
        required: false},
    uses_custom_open_graph_image: {
        type: Boolean,
        required: false},
    vulnerability_alerts: {
        type: Number,
        required: false},
    watchers: {
        type: Number,
        required: false}
});

const Repository = mongoose.model("Repository", RepositorySchema);

module.exports = Repository;